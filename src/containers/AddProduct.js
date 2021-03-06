import Product from '../components/forms/Product'
import { connect } from 'react-redux'
import { addProduct } from '../actions'
import { useNavigate } from 'react-router-dom'

const AddProductContainer = ({ dispatch }) => {

    const navigate = useNavigate()
    const handleSubmit =  async product => {
        await dispatch(addProduct(product))
        navigate('/store/products')
    }

    return (<div className="flex flex-col items-center my-16 px-8">
                <div className="w-full md:w-9/12 lg:w-9/12">
                    <div className="flex items-center justify-center text-center">
                    <span className="pl-2 text-xl mb-4">Add new product</span>
                    </div>
                </div>
                <div className="md:w-9/12 lg:w-6/12 justify-center flex">
                    <Product onSubmit={handleSubmit}/>
                </div>
            </div>)
}

export default connect()(AddProductContainer)