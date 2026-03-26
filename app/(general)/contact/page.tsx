import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Page",
    description: "This is the contact page of Luna's app",
    keywords: ["contact page", "luna", "app", "information"],
}

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}