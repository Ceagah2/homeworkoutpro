import { useUser } from "@/data/userContext";
import { useUser as Data } from "@clerk/clerk-expo";
import React, { useEffect, useState } from "react";
import * as S from "./styles";

export function Header() {
  const [greeting, setGreeting] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");
  const { userData } = useUser();
  const { user } = Data();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 3 && hour < 12) {
      return "Bom dia";
    } else if (hour >= 12 && hour < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  const formatDateTime = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("pt-BR", { month: "long" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${day} de ${month} de ${year} - ${time}`;
  };

  useEffect(() => {
    setGreeting(getGreeting());
    setCurrentDateTime(formatDateTime());
  }, []);

  return (
    <S.HeaderContainer>
      <S.UserImage source={{ uri: userData?.photoUrl || user?.imageUrl}} />
      <S.TextContainer>
        <S.GreetingText>
          {greeting}, {userData?.fullName || user?.fullName}!
        </S.GreetingText>
        <S.DateTimeText>{currentDateTime}</S.DateTimeText>
      </S.TextContainer>
    </S.HeaderContainer>
  );
}
