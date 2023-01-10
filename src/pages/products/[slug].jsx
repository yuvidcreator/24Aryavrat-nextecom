import { useRouter } from 'next/router'
// import GradientText from '../../components/common/GradientText'
// import DynamicTextForPages from '../../components/common/DynamicTextForPages'
import ProductComponent from '../../components/Products/ProductComponent'

const Product = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            {/* <div className="flex justify-center items-center text-center min-h-screen">
                <GradientText text={"Product Page"} />
                <DynamicTextForPages text={`Your Query slug: /${slug}/`} />
            </div> */}
            
            <ProductComponent slug={slug} />
        </>
    )
}

export default Product