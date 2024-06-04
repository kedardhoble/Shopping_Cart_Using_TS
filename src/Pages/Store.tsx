import { StoreItem } from "../Components/storeItems"
import storeItems from "../Data/items.json"
import { Col, Row} from "react-bootstrap"

type props ={quantity:number,setQuantity:any}
export function Store(props:props) {
const{quantity, setQuantity}=props;
    return (
    <>
        <h1>Store</h1>
        <Row md={2} lg={3} xs={1} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem data={item} quantity={quantity} setQuantity={setQuantity}  />
                </Col>
            ))}
        </Row>
    </>
    )
}