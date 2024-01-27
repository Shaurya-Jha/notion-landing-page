"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {X, AlignJustify} from "lucide-react";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";
// import { RxDropdownMenu } from "react-icons/rx";

const ActionButtons = () => {

    // state to handle the menu button visibility
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // toggle the menu button / hamburger button
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    }

    // close the hamburger menu button
    const closeDropdown = () => {
        setDropdownVisible(false);
    }

  return (
    <div className="pr-2">
        <div className="items-center justify-center flex">
            <div className="flex xl:space-x-4">
                <Link href="/contact-sales" className="hidden lg:flex items-center">
                    <div>Request a demo</div>
                </Link>

                <div className=" mt-2 lg:flex font-thin hidden">|</div>

                <div className="flex lg:space-x-4 items-center pr-4">
                    <div>
                        <Button variant="outline" className="hidden lg:flex items-center border-none">
                            Log in
                        </Button>
                    </div>

                    <div>
                        <Button variant="default" className="hidden lg:flex items-center border-none">
                            Get Bird Free
                        </Button>
                    </div>
                </div>

                {isDropdownVisible && (
                    <div onClick={toggleDropdown} className="rounded-full xl:hidden">
                        <X className="h-5 w-5 items-center justify-center " />
                    </div>
                )}

                {!isDropdownVisible && (
                    <div onClick={toggleDropdown} className="flex lg:hidden">
                        <AlignJustify className="h-5 w-5 items-center justify-center mr-2" />
                    </div>
                )}

                {isDropdownVisible && (
                    <DropDownMenu onClose={closeDropdown} />
                )}
            </div>
        </div>
    </div>
  );
};

export default ActionButtons;
