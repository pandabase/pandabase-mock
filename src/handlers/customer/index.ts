import {
  GetCustomerResponse,
  GetCustomersResponse,
  UpdateCustomerRequest,
} from "customer-interfaces";
import { customers } from "../../data";

export function handleGetCustomer(id: number) {
  const customer = customers.find((c) => c.id === id);

  if (customer) {
    return customer as GetCustomerResponse;
  } else {
    return { error: `Customer with id ${id} was not found` };
  }
}

export function handleGetCustomers() {
  const response = { data: customers };

  return response as GetCustomersResponse;
}

export function handleUpdateCustomer(id: number, data: UpdateCustomerRequest) {
  const customerIndex = customers.findIndex((customer) => customer.id === id);

  if (customerIndex !== -1) {
    customers[customerIndex] = {
      ...customers[customerIndex],
      ...data,
    };

    return { message: `Customer with id ${id} was updated` };
  } else {
    return { error: `Customer with id ${id} was not found` };
  }
}

export function handleDeleteCustomer(id: number) {
  const customer = customers.filter((customer) => customer.id !== id);

  if (customer) {
    return { message: `Customer with id ${id} was deleted` };
  } else {
    return { error: `Customer with id ${id} was not found` };
  }
}

export default {
  handleGetCustomers,
  handleGetCustomer,
  handleUpdateCustomer,
  handleDeleteCustomer,
};
