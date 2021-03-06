import PropTypes from 'prop-types'
import { isRequired } from '../../utils'
import Input from '../shared/Input/Input'
import Button from '../shared/Button/Button'

const Product = ({ onSubmit }) => {

    const form = {
        name: '',
        price: '',
        quantity: '',
        category: '',
        description: '',
        imageUrl: '',
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidDTO()) {
            onSubmit(form)
        }
    }

    const isValidDTO = () => {
        return isRequired(form.name) &&
        isRequired(form.price) &&
        isRequired(form.quantity)
    }

    const setFieldValue = (type, value) => {
        form[type] = value
    }

    return (
        <div className="" style={{ width: '24rem' }}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="flex flex-col m-auto">
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="name">Name</label>
                        <div className="relative">
                            <Input name="name" onBlur={(val) => setFieldValue('name', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="price">Price</label>
                        <div className="relative">
                            <Input name="price" onBlur={(val) => setFieldValue('price', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="quantity">Quantity</label>
                        <div className="relative">
                            <Input name="quantity" onBlur={(val) => setFieldValue('quantity', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="description">Description</label>
                        <div className="relative">
                            <Input name="description" onBlur={(val) => setFieldValue('description', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="category">Category</label>
                        <div className="relative">
                            <Input name="category" onBlur={(val) => setFieldValue('category', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>
                    <Button type="type" className="mt-4">Add</Button>
                </div>
            </form>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
}

export default Product