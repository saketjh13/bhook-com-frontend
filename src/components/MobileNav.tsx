// import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { CircleUserRound, Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from '@radix-ui/react-separator'
import { useAuth0 } from '@auth0/auth0-react';
import MobileNavLinks from './MobileNavLinks';

export default function MobileNav() {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='text-white'></Menu>
            </SheetTrigger>
            <SheetContent className='space-y-3'>
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-white-500" />
                            {user?.name}
                        </span>
                    ) : (
                        <span> Welcome to Bhook.com!</span>
                    )}
                </SheetTitle>
                <Separator></Separator>
                <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold bg-red-500"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}
