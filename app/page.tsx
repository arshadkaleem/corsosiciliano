import Image from "next/image";
import { Mail, Phone } from "lucide-react";
export default function Home() {
  return (

    <div className="flex items-center justify-center w-full h-screen flex-col">
      <Image
          className="dark:invert"
          src="/logo/corso-siciliano-trans-logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
      />
      

    <div className="flex flex-col space-y-4 mt-4">
      <div className="flex items-center justify-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
          <Mail className="w-5 h-5" data-lt-installed="true" />
            <a 
              href="mailto:support@corsosiciliano.com" 
              className="text-sm font-medium"
            >
              support@corsosiciliano.com
            </a>
      </div>


      <div className="flex items-center justify-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-5 h-5" />
            <a 
              href="tel:+17739993999" 
              className="text-sm font-medium"
            >
              +1 (773) 999-3999 / +1 (630) 641-1519
            </a>
          </div>

    </div>

    






    </div>
  
  );
}


















