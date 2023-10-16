import { useContext } from "react";
import { AssetContext } from "../Grandpa/Granpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>has: {asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Special;