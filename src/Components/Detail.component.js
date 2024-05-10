const Detail = (props) => {
    const { title, value } = props;
    return (
        <div className="detail-container">
            <div className="detail-title">
                {title}
            </div>
            <div className="detail-value">
                {value}
            </div>
        </div>
    )
}

export default Detail;