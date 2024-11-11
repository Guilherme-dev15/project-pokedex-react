import loading from "../assets/loading.svg";
import { styled } from 'styled-components';

const LoadingSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .loader {
        width: 200px;
    }
`;

function Loading() {
    return (
        <LoadingSection>
            <img className="loader" src={loading} alt="Loading" />
        </LoadingSection>
    );
}

export default Loading;