import React from 'react'
import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import { useAuthContext } from '../../Hooks/useAuthContext'

export default function Home() {
    const { user } = useAuthContext();

    return (
        <div className="container">
            <main className={styles["diary-main"]}>
                <h2 className="heart">2023.06.08의 비밀일기</h2>
                <DiaryForm uid={user.uid}></DiaryForm>
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul></ul>
            </section>
        </div>
    )
}