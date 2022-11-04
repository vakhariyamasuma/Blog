import react from "react"
export default function Posts(props) {
    return (
        <>
            <div class="card text-bg-dark">
                <img src={props.post.imgUrl} class="card-img" alt="..." style={{ height: "250px" }} />
                <div class="card-img-overlay">
                    <h5 class="card-title">{props.post.title}</h5>
                    <p class="card-text">{props.post.description}</p>
                </div>
            </div>
        </>
    )
}