import React, { useState } from "react";
import { Input, Select, SelectItem } from "@heroui/react";
import type { PhoneInputProps } from "./PhoneInput.types";
import { countries } from "../../assets/data/countries";


/**
 * PhoneInput component with country selector
 * Provides a business phone number input with country code selection
 */
export const PhoneInput: React.FC<PhoneInputProps> = ({
  value = "",
  defaultCountry = "US",
  placeholder = "3123456789",
  label = "What is your business phone number?",
  description,
  errorMessage,
  isRequired = false,
  isDisabled = false,
  isInvalid = false,
  variant = "flat",
  color = "default",
  size = "md",
  radius,
  fullWidth = true,
  className = "",
  onValueChange,
  onCountryChange,
  ...props
}: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState(value);

  // Encontrar el país seleccionado
  const currentCountry = countries.find(country => country.code === selectedCountry) || countries[0];

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    const country = countries.find(c => c.code === countryCode);
    if (country && onCountryChange) {
      onCountryChange(country);
    }
  };

  const handlePhoneChange = (value: string) => {
    // Remover caracteres no numéricos excepto espacios y guiones
    const cleanValue = value.replace(/[^\d\s-]/g, '');
    setPhoneNumber(cleanValue);
    
    if (onValueChange) {
      onValueChange(cleanValue);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-900 dark:text-white">
          {label}
          {isRequired && <span className="text-danger ml-1">*</span>}
        </label>
      )}
      
      <div className="flex gap-0">
        {/* Country Selector */}
        <Select
          selectedKeys={[selectedCountry]}
          onSelectionChange={(keys) => {
            const selectedKey = Array.from(keys)[0] as string;
            handleCountryChange(selectedKey);
          }}
          variant={variant}
          color={color}
          size={size}
          radius={radius}
          isDisabled={isDisabled}
          className="min-w-[140px] max-w-[140px]"
          classNames={{
            trigger: "rounded-r-none border-r-0",
            value: "text-left",
          }}
          renderValue={() => (
            <div className="flex items-center gap-2">
              <span className="text-lg">{currentCountry.flag}</span>
              <span className="text-sm font-medium">{currentCountry.dialCode}</span>
            </div>
          )}
          popoverProps={{
            placement: "bottom-start",
          }}
        >
          {countries.map((country) => (
            <SelectItem
              key={country.code}
              textValue={`${country.name} ${country.dialCode}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{country.flag}</span>
                <div className="flex flex-col">
                  <span className="text-sm">{country.name}</span>
                  <span className="text-xs text-gray-500">{country.dialCode}</span>
                </div>
              </div>
            </SelectItem>
          ))}
        </Select>

        {/* Phone Number Input */}
        <Input
          type="tel"
          value={phoneNumber}
          onValueChange={handlePhoneChange}
          placeholder={placeholder}
          variant={variant}
          color={color}
          size={size}
          radius={radius}
          isRequired={isRequired}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          fullWidth={fullWidth}
          description={description}
          errorMessage={errorMessage}
          className="flex-1"
          classNames={{
            inputWrapper: "rounded-l-none border-l-0",
          }}
          {...props}
        />
      </div>
    </div>
  );
}; 