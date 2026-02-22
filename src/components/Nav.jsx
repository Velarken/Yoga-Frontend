import '../styles/Nav.css'

export function Nav({links}) {
    const renderLinks = links.map((link) => {
        return (
            <li key={link.key}><a href={link.href}>{link.name}</a></li>
        )
    })
    return (
        <nav>
            <ul>
                {renderLinks}
            </ul>
        </nav>
    )
}
export default Nav;