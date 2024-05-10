import Divider from "./Divider.component";

const DetailsCard = (props) => {
    const { children, title } = props;
    return (
        <div className="details-card-container">
            {title ? (
                <div>
                    <div className="card-title">
                        {title}
                    </div>
                    <Divider />
                    </div>
            ) : null}
            <div>
                {children}
            </div>
        </div>
    )
}

export default DetailsCard;