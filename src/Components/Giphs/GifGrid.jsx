import GridItems from "./GridItems"
import Spinner from "../UI/Spinner"


function GifGrid({ items, isLoading }) {
    return isLoading ? (<Spinner />) : (
        <section className="cards">
            {items.map((item) => (
            <GridItems key={item.images.fixed_height.size + Math.random()} item={item.images.fixed_height.url}>

            </GridItems>
        ))}
    </section>
    )
}

export default GifGrid
