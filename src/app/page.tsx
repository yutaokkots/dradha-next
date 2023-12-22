/** 
 * Main page for the app. 
 * Route: '/'
*/
import AuthModal from '@/components/modals/AuthModal'
import NavBar from '@/components/common/NavBar/NavBar'
import Login from './login/page'
export default function Home() {
    return (
        <main>
            <NavBar></NavBar>
            <AuthModal />
            <Login />
        </main>
    )
}