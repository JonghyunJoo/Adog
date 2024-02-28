import Link from "next/link";

interface PresetMenuItemProps {
    link: string;
    name: string;
}

export default function PresetMenuItem(props: PresetMenuItemProps) {
    return (
        <div id="preset-menu" className="flex preset-menu">
            <div className="menu-item">
                <span>
                    <Link className="menu-item-link" href={props.link}>{props.name}</Link>
                </span>
            </div>
        </div>
    )
}