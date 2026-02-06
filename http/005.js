// 이 요청은 브라우저에서 'https://dev.wenivops.co.kr/services/fastapi-crud/723/product'에 접속하는 것과 동일한 효과를 냅니다. 이러한 요청을 GET 요청이라고 합니다.

// GET으로 요청 보내기
const url = 'https://dev.wenivops.co.kr/services/fastapi-crud/723/product'

fetch(`${url}`)
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// query string을 포함한 GET 요청 보내기
const url = 'https://dev.wenivops.co.kr/services/fastapi-crud/753/product/search';
const params = new URLSearchParams({ keyword: 'keyring' });

console.log(`${url}?${params}`);

fetch(`${url}?${params}`)
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });