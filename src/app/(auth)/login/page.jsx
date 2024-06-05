"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/shadcnComponents/button";
import Footer from "@/components/ui/MyComponents/Footer";
import { useRouter } from "next/navigation";
import { useJwtCreateMutation } from "@/redux/features/auth/authApiSlice";
import LoginPage from "@/components/forms/login";

export default function Login() {
	return <LoginPage />;
}
