import Customer from '../models/customer.model';


/**
 * Create new customer
 */
function createCustomer(req, res, next) {
  const customer = new Customer({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    order: req.body.order
  });

  customer.save()
    .then(savedCustomer => res.json(savedCustomer))
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {Customer}
 */
function getCustomer(req, res) {
  return res.json(req.customer);
}


export default { createCustomer, getCustomer };
