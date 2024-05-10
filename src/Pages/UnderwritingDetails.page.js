import Detail from "../Components/Detail.component";
import DetailsCard from "../Components/DetailsCard.component";
import { Button } from "@ey-org/common-ui-components";

const UnderwritingDetailsPage = () => {
    return (
        <div className="underwriting-page-bg">
            <DetailsCard title="ETB">
                <div className="horizontal-flex-details">
                    <Detail title="Customer Name" value="Kishore Purushotham" />
                    <Detail title="Customer Profile" value="Salaried" />
                    <Detail title="Segment" value="ETB/NTB" />
                    <Detail title="Product variant/ Scheme" value="PL" />
                    <Detail title="Sourcing Platform" value="digital" />
                    <Detail title="Sourcing Channel" value="Mobile Banking" />
                </div>
            </DetailsCard>
            <DetailsCard title="Customer Profile Details">
                <div className="horizontal-flex-details align-center">
                    <Detail title="Name of the applicant (as per Aadhar)" value="Kishore Purushotham" />
                </div>
                <div className="horizontal-flex-details space-between">
                    <div className="horizontal-flex-details">
                        <Detail title="Name as per Bank statement" value="Kishore Purushotham" />
                        <Detail title="Match Percentage" value="100" />
                    </div>
                    <div className="horizontal-flex-details">
                        <Detail title="Name as per Bank statement" value="Kishore Purushotham" />
                        <Detail title="Match Percentage" value="100" />
                    </div>
                </div>
            </DetailsCard>
        </div>
    )
}

export default UnderwritingDetailsPage;