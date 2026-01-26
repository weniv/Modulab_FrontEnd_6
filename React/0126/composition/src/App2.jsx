import styled, { css } from "styled-components";

const CardContainer = styled.article`
    width: 400px;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

const Padding = css`
    padding: 0 16px;
`;

const Title = styled.h2`
    ${Padding}
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const SubTitle = styled.p`
    ${Padding}
    color: #666;
    font-size: 20px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    ${Padding}
    color: #333;
    margin-bottom: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`;

const Breed = styled.span`
    ${Padding}
    color: #3b82f6;
    font-size: 24px;
    font-weight: bold;
    display: block;
    margin-bottom: 20px;
`;

function ContCard({ children }) {
    return <CardContainer>{children}</CardContainer>;
}

function ProductImage({ src, alt }) {
    return <Image src={src} alt={alt} />;
}

function ProductTitle({ children }) {
    return <Title>{children}</Title>;
}

function ProductSubTitle({ children }) {
    return <SubTitle>{children}</SubTitle>;
}

function ProductDescription({ children }) {
    return <Description>{children}</Description>;
}

function ProductBreed({ breed }) {
    return <Breed>{breed}</Breed>;
}
function App() {
    return (
        <>
            <ContCard>
                <ProductImage src="https://picsum.photos/id/237/200/300" alt="검은강아지" />
                <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
                <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
                <ProductDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio sed molestias saepe reiciendis fugit illum enim et inventore, aliquam esse non nam consectetur minima
                    atque consequuntur voluptates, eum quia.
                </ProductDescription>
                <ProductBreed breed="래브라도 리트리버" />
            </ContCard>

            {/* 미니멀 */}
            <ContCard>
                <ProductImage src={"https://picsum.photos/id/1025/200/300"} alt={"귀여운 강아지"} />
                <ProductTitle>퍼그</ProductTitle>
                <ProductSubTitle>귀여운 퍼그를 입양하세요</ProductSubTitle>
            </ContCard>

            {/* 텍스트 위주 */}
            <ContCard>
                <ProductTitle>입양 안내사항</ProductTitle>
                <ProductSubTitle>꼭 읽어주세요!</ProductSubTitle>
                <ProductDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit cum numquam esse magnam corrupti, sapiente quod officia! Amet aspernatur dolores assumenda tempora eveniet
                    pariatur magni, eum culpa corporis placeat!
                </ProductDescription>
            </ContCard>
        </>
    );
}

export default App;
