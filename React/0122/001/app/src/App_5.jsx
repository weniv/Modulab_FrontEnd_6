function Card({name, image, job, isWorking, company}) {
    return (
        <>
            <img src={image} alt="" />
            <div>{name}</div>
            <div>{job}</div>
            {isWorking?<div>재직중</div>:<div>구직중</div>}
            <div>{company}에서 일하는 중입니다.</div>
        </>
    )
}

const data = {
    name: 'licat',
    image: 'https://picsum.photos/400/400',
    job: 'developer',
    isWorking: true,
    company: 'weniv'
};


function App() {
    return (
        <>
            <Card
                {...data}
            />
        </>
    );
}

export default App; 