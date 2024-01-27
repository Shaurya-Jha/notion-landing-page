import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
    BarChart,
    Code,
    DollarSign,
    Headphones,
    PaintBucket,
    Settings,
    UserPlus
} from "lucide-react"

// created props for the dropdown menu
interface DropDownMenuProps {
  onClose: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="mt-6 w-screen h-screen bg-white px-4 items-center justify-center absolute right-0 xl:hidden">

        {/* the defaultValue="item-1" will keep the first accordion opened up by default */}
      <Accordion className="pl-2" defaultValue="item-1" type="single" collapsible>

        {/* use cases tab */}
        <AccordionItem value="item-1" className="mt-2 border-b">
          <AccordionTrigger>Use cases</AccordionTrigger>
          <AccordionContent>

            {/* items to be shown in first accordion */}
            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <BarChart className="h-5 w-6 mr-2 text-red-400" />
                </div>
                <div>Sales</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Code className="h-5 w-6 mr-2 text-purple-400" />
                </div>
                <div>Code</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <DollarSign className="h-5 w-6 mr-2 text-green-400" />
                </div>
                <div>Growth</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Headphones className="h-5 w-6 mr-2 text-blue-400" />
                </div>
                <div>Conference</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <PaintBucket className="h-5 w-6 mr-2 text-indigo-400" />
                </div>
                <div>Request</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <UserPlus className="h-5 w-6 mr-2 text-pink-400" />
                </div>
                <div>Support</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Settings className="h-5 w-6 mr-2 text-gray-400" />
                </div>
                <div>Lead</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/*  */}
        <AccordionItem value="item-2" className="mt-2 border-b">
          <AccordionTrigger>For Business</AccordionTrigger>
          <AccordionContent>

            {/* items to be shown in first accordion */}
            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <BarChart className="h-5 w-6 mr-2 text-red-400" />
                </div>
                <div>Sales</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Code className="h-5 w-6 mr-2 text-purple-400" />
                </div>
                <div>Code</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <DollarSign className="h-5 w-6 mr-2 text-green-400" />
                </div>
                <div>Growth</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Headphones className="h-5 w-6 mr-2 text-blue-400" />
                </div>
                <div>Conference</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <PaintBucket className="h-5 w-6 mr-2 text-indigo-400" />
                </div>
                <div>Request</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <UserPlus className="h-5 w-6 mr-2 text-pink-400" />
                </div>
                <div>Support</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Settings className="h-5 w-6 mr-2 text-gray-400" />
                </div>
                <div>Lead</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/*  */}
        <AccordionItem value="item-3" className="mt-2 border-b">
          <AccordionTrigger>For Customers</AccordionTrigger>
          <AccordionContent>

            {/* items to be shown in first accordion */}
            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <BarChart className="h-5 w-6 mr-2 text-red-400" />
                </div>
                <div>Sales</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Code className="h-5 w-6 mr-2 text-purple-400" />
                </div>
                <div>Code</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <DollarSign className="h-5 w-6 mr-2 text-green-400" />
                </div>
                <div>Growth</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Headphones className="h-5 w-6 mr-2 text-blue-400" />
                </div>
                <div>Conference</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <PaintBucket className="h-5 w-6 mr-2 text-indigo-400" />
                </div>
                <div>Request</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <UserPlus className="h-5 w-6 mr-2 text-pink-400" />
                </div>
                <div>Support</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Settings className="h-5 w-6 mr-2 text-gray-400" />
                </div>
                <div>Lead</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/*  */}
        <AccordionItem value="item-4" className="mt-2 border-b">
          <AccordionTrigger>For Entrepreneurs</AccordionTrigger>
          <AccordionContent>

            {/* items to be shown in first accordion */}
            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <BarChart className="h-5 w-6 mr-2 text-red-400" />
                </div>
                <div>Sales</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Code className="h-5 w-6 mr-2 text-purple-400" />
                </div>
                <div>Code</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <DollarSign className="h-5 w-6 mr-2 text-green-400" />
                </div>
                <div>Growth</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Headphones className="h-5 w-6 mr-2 text-blue-400" />
                </div>
                <div>Conference</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <PaintBucket className="h-5 w-6 mr-2 text-indigo-400" />
                </div>
                <div>Request</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <UserPlus className="h-5 w-6 mr-2 text-pink-400" />
                </div>
                <div>Support</div>
            </Link>

            <Link href="/ecommerce" className="flex my-1" onClick={handleLinkClick}>
                <div>
                    <Settings className="h-5 w-6 mr-2 text-gray-400" />
                </div>
                <div>Lead</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/* pricing tab */}
        <Link href="/" className="flex flex-1 items-center justify-between py-4 border-b">
            Pricing
        </Link>

        {/* request a demo tab */}
        <Link href="/contact-sales" className="flex flex-1 items-center justify-between py-4 border-b">
            Request a demo
        </Link>
      </Accordion>

      <div className="pt-12">
        <div className="space-y-4 flex flex-col px-4">
            <Button className="w-full">Get Bird Free</Button>
        </div>

        <div className="space-y-4 flex flex-col px-4 mt-3">
            <Button variant="outline" className="w-full">Log in</Button>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
