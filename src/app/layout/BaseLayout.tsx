import React from "react";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return <div className="container">{children}</div>;
}
