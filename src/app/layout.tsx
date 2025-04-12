"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  if (isAdminRoute) {
    // Render children only, no header/sidebar/footer
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-xl font-bold">MySite</div>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link href="/" className="hover:text-gray-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-gray-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin" className="hover:text-gray-300">
                      Admin
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="bg-gray-100 w-64 p-4 hidden md:block">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/category/technology"
                    className="text-blue-600 hover:underline"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/design"
                    className="text-blue-600 hover:underline"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/business"
                    className="text-blue-600 hover:underline"
                  >
                    Business
                  </Link>
                </li>
              </ul>
            </aside>

            {/* Page content */}
            <main className="flex-1 p-6">{children}</main>
          </div>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} MySite. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
