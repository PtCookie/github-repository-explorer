import React from "react";
import { I18nextProvider } from "react-i18next";
import { render, screen, fireEvent } from "@testing-library/react";

import { createI18next } from "@/locales/client";
import { defaultLocale } from "@/locales/options";
import { SearchBar } from "@/components/search/SearchBar";
import i18nJson from "@/locales/i18n.json";

const i18n = createI18next(defaultLocale);
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

describe("SearchBar", () => {
  test("renders properly", async () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, { wrapper });

    await screen.findByTestId("username-input");

    expect(
      screen.getByPlaceholderText(i18nJson[defaultLocale].enterUsername),
    ).toBeInTheDocument();
    expect(
      screen.getByText(i18nJson[defaultLocale].search),
    ).toBeInTheDocument();
  });

  test("calls onSearch with input value when form is submitted", async () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, { wrapper });

    await screen.findByTestId("username-input");

    const input = screen.getByPlaceholderText(
      i18nJson[defaultLocale].enterUsername,
    );
    const button = screen.getByTestId("search-button");

    fireEvent.change(input, { target: { value: "testUser" } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith("testUser");
  });

  test("trims input value before calling onSearch", async () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, { wrapper });

    await screen.findByTestId("username-input");

    const input = screen.getByPlaceholderText(
      i18nJson[defaultLocale].enterUsername,
    );
    const button = screen.getByTestId("search-button");

    fireEvent.change(input, { target: { value: "  testUser  " } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith("testUser");
  });

  test("does not call onSearch if input is empty", async () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, { wrapper });

    await screen.findByTestId("username-input");

    const button = screen.getByTestId("search-button");

    fireEvent.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });
});
