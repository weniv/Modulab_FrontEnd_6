import { useActionState } from "react";

export function LoginComponent() {
    async function loginAction(previousState, formData) {
        const id = formData.get('id');
        const password = formData.get('password');

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, password })
            });

            if (!response.ok) {
                t
                throw new Error('통신에 문제가 있습니다.');
            }

            const result = await response.json();
            console.log(`${result.user.id} 님 환영합니다!`);


            return { success: true, message: "로그인 성공", user: result.user };
        } catch (error) {
            console.error(error.message);

            return { success: false, message: error.message };
        }
    }


    const [state, formAction, isPending] = useActionState(loginAction, {
        success: null,
        message: ""
    });


    return (
        <>
            <h2>로그인</h2>
            <form action={formAction}>
                <div>
                    <label htmlFor="id">
                        아이디:
                        <input type="text" id="id" name="id" required />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        비밀번호:
                        <input type="password" id="password" name="password" required />
                    </label>
                </div>
                <button type="submit" disabled={isPending}>
                    {isPending ? "로그인 중..." : "로그인"}
                </button>
                <button type="reset">초기화</button>
            </form>

            {/* Display status messages */}
            {state?.message && (
                <p style={{ color: state.success ? "green" : "red" }}>
                    {state.message}
                </p>
            )}
        </>
    );
}