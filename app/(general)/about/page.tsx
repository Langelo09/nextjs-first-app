import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "This is the about page of Luna's app",
    keywords: ["about page", "luna", "app", "information"],
}

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}