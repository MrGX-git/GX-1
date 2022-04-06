import PropTypes from 'prop-types'

import { Button } from '../../atoms/Button'

export const ProductTableRow =({name, price, qty, id, onCardAdd, onCardRemove})=> {
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{price}</td>
        <td>{qty} / {price * qty}</td>
        <td>
            <div className="btn-group">
                <Button className='btn btn-outline-success' text='➕' onClick={onCardAdd}/>
                <Button className='btn btn-outline-warning' text='🗑' onClick={onCardRemove}/>
            </div>
        </td>
      </tr>
    )
}

ProductTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onCardAdd: PropTypes.func.isRequired,
  onCardRemove: PropTypes.func.isRequired
}