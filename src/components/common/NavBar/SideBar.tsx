import React from 'react'
import ThemeToggler from '@/components/primitives/ThemeToggler';

const SideBar = () => {
    return (
        <nav>
            <div className="hidden border-2 border-blue-200
                    smcustom:h-screen 
                    smcustom:visible 
                    smcustom:fixed 
                    smcustom:flex 
                    smcustom:flex-col
                    smcustom:items-start 
                    smcustom:w-[150px]
                    smcustom:p-1">
                <div className="grid grid-cols-2 border-2 w-full">
                    <div>Name</div>
                    <div className="text-right"><ThemeToggler /></div>
                </div>
                <div className="border-2 w-full">
                    <div>Home</div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">A</div>
                        <div className="col-span-9">About</div>
                    </div>
                </div>
                <div className="border-2 w-full">
                    <div>Self</div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">B</div>
                        <div className="col-span-9">Bookmarks</div>
                    </div>
                </div>
                <div className="border-2 w-full">
                    <div>Project</div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">N</div>
                        <div className="col-span-9">Project3</div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">P</div>
                        <div className="col-span-9">Project 1</div>
                    </div>
                </div>
                <div className="flex-1 border-2 w-full flex items-end">
                    <div className='flex flex-col w-full border-green-100 items-center'>
                        <div>
                            <button className='border-2 rounded-md'>
                                Sign in
                            </button>
                        </div>
                        <div className="border-2 w-full border-green-100">
                            <div>
                                About dradha
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;