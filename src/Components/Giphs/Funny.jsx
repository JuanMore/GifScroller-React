import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Spinner from "../UI/Spinner"

function Funny({ funnyItems, isLoading }) {
    return isLoading ? (<Spinner />) : (
        
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 1000: 3 }}>
            
            <Masonry columnsCount={3} gutter="10px">
                {funnyItems.map((item) => (
            <img
                key={item.images.fixed_height.size + Math.random()}
                src={item.images.fixed_height.url}
                alt= ""
                style={{width: "100%", display: "block"}}

            />
        ))}
        </Masonry>
      </ResponsiveMasonry>
    )
}

export default Funny

