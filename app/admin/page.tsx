"use client"; // Add this at the top

import { clerkClient, currentUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAdminStatus = async () => {
      const user = await currentUser();
      if (user?.publicMetadata?.role === 'admin') {
        setIsAdmin(true);
      } else {
        router.push('/');
      }
    };
    checkAdminStatus();
  }, [router]);

  if (!isAdmin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Manage events and resources here</p>

      {/* Forms for creating/updating events and resources */}
      {/* Placeholder, real form logic will be added */}
    </div>
  );
}
