import { BorderBeam } from '@/components/magicui/border-beam'
import Globe from '@/components/magicui/globe'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const ContactMe = () => {
  return (
    <div className='m-11 md:m-16 w-full md:w-[90%] overflow-y-hidden overflow-x-hidden'>
        <Card className='relative z-10 bg-stone-50 dark:bg-gray-900/40'>
            <BorderBeam duration={18} size={500} />
            <CardHeader>
                <CardTitle>Contact Me</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='w-full md:w-1/2'> 
                    <form action="" className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <Label>Your Name</Label>
                            <Input type='text' required/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Your Email</Label>
                            <Input type='email' required/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Message</Label>
                            <Textarea rows={10}/>
                        </div>
                        <div>
                            <Button>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className='w-full md:w-1/2'>
                    <Globe className=''/>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default ContactMe
