/**
 * 4. 
 */
// 주문 상태를 나타내는 enum을 정의하세요
enum OrderStatus {
  // PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELEIVERED',
  CANCELLED = 'CANCELLED'
}

// 주문 인터페이스
interface Order {
  id: number;
  customerName: string;
  amount: number;
  status: OrderStatus;
  createdAt: Date;
}

// 주문 상태를 문자열로 변환하는 함수를 만드세요
function getStatusText(status: OrderStatus): string {
  // switch문을 사용하여 구현하세요
  switch(status) {
    case OrderStatus.PENDING:
        return "pending";
    case OrderStatus.CANCELLED:
        return "cancelled";
    case OrderStatus.DELIVERED:
        return "delivered";
    case OrderStatus.CONFIRMED:
        return "confirmed";
    case OrderStatus.SHIPPED:
        return "shipped";
    default:
        return "unknown";
  }
}

// 사용 예시
const order: Order = {
  id: 1,
  customerName: "고객님",
  amount: 50000,
  status: OrderStatus.PENDING,
  createdAt: new Date()
};

console.log(getStatusText(order.status)); // "대기중" 출력

/**
 * 5.
 */
interface FullUser {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
  createdAt: Date;
}

// 1. 사용자 생성시 필요한 정보만 받는 타입 (id, createdAt 제외)
type CreateUserData = /* Omit을 사용하여 정의하세요 */ Omit<FullUser, 'id' | 'createdAt'>;

// 2. 사용자 업데이트시 부분적으로 수정 가능한 타입 (id 제외)
type UpdateUserData = /* Partial과 Omit을 조합하여 정의하세요 */ Partial<Omit<FullUser, 'id'>>;

// 3. 공개 프로필용 타입 (password 제외)
type PublicUser = /* Omit을 사용하여 정의하세요 */ Omit<FullUser, 'password'>;

// 4. 로그인 정보만 담는 타입
type LoginData = /* Pick을 사용하여 정의하세요 */ Pick<FullUser, 'email' | 'password'>;

// 함수들을 구현하세요
function createUser(userData: CreateUserData): FullUser {
  // 구현하세요 (id와 createdAt은 자동 생성)
  return {
    ...userData,
    id: Math.floor(Math.random() * 1000),
    createdAt: new Date()
  }
}
function getPublicProfile(user: FullUser): PublicUser {
  // 구현하세요
  const { password, ...publicData } = user;
  return publicData;
}