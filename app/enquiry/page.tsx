import { Suspense } from "react";
import EnquiryForm from "./EnquiryForm";

export default function Page() {
  return (
    <Suspense fallback={<div className="pt-24 text-center">Loading...</div>}>
      <EnquiryForm />
    </Suspense>
  );
}
