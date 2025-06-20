import { useState, useEffect } from "react";

export function Navbar() {
  const [userType, setUserType] = useState(() => localStorage.getItem('userType') || 'resident');

  useEffect(() => {
    localStorage.setItem('userType', userType);
  }, [userType]);

  return (
    <Select onValueChange={val => setUserType(val)} value={userType} defaultValue="resident">
      <SelectTrigger>
        <SelectValue placeholder="I am a:" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="resident">Resident</SelectItem>
        <SelectItem value="visitor">Visitor</SelectItem>
        <SelectItem value="councilor">Councilor</SelectItem>
      </SelectContent>
    </Select>
  );
} 