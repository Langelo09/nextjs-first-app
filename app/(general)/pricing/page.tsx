import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Page",
    description: "This is the pricing page of Luna's app",
    keywords: ["pricing page", "luna", "app", "information"],
}

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}