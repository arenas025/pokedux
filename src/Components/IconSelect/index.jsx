import { StarFilled, StarOutlined } from "@ant-design/icons"
import { Button } from "antd"

const IconSelect = ({isFavorite, onClick}) => {

    const Icon = isFavorite ? StarFilled : StarOutlined
    return(
        <Button icon={<Icon/>} onClick={onClick} />
    )
}

export default IconSelect