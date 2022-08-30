import React from "react";
import { useSiteMetadata } from "../../../components/hooks/use-site-metadata";

export default function Copyrights() {
  const { title: copyrightsOwner } = useSiteMetadata();
  const today: Date = new Date();
  const yearToday: number = today.getFullYear();

  return (
    <div>
      <p>
        © {yearToday} {copyrightsOwner} - Wszystkie prawa zastrzeżone.
      </p>
    </div>
  );
}
