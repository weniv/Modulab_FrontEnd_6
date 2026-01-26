import { useState } from "react";

const employees = [
    { id: 1, name: "Wade", email: "wade@example.com", job: "Designer" },
    { id: 2, name: "Zeezee", email: "zeezee@example.com", job: "Manager" },
    { id: 3, name: "Rosy", email: "rosy@example.com", job: "Engineer" },
    { id: 4, name: "Hati", email: "hati@example.com", job: "Engineer" },
];

function EmployeeCard({ employee }) {
    // 각 카드들의 독립적인 열림/닫힘 상태
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li>
            <h3 onClick={() => setIsOpen(!isOpen)}>{employee.name}</h3>

            {isOpen && (
                <div>
                    <p>이메일: {employee.email}</p>
                    <p>직무: {employee.job}</p>
                </div>
            )}
        </li>
    );
}

function App() {
    return (
        <>
            <h2>직원 목록</h2>
            <ul>
                {/* <EmployeeCard employee={} /> */}
                {employees.map((employee) => (
                    <EmployeeCard key={employee.id} employee={employee} />
                ))}
            </ul>
        </>
    );
}

export default App;
