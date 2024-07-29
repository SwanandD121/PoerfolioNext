import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Separator } from '../../components/ui/separator'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import projectData  from './projectData'
import ShineBorder from '@/components/magicui/shine-border'
import { BorderBeam } from '@/components/magicui/border-beam'
import MovingGradient from '@/components/animata/background/moving-gradient'

const ProjectCards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {projectData.map((project, index) => (
                <Card key={index}>
                    <CardHeader className='text-3xl bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-center font-bold '>
                        {project.name}
                    </CardHeader>
                    <Separator/>
                    <CardContent className='p-6 min-h-44 tracking-wide'>
                        {project.desc}
                    </CardContent>
                    <Separator />
                    <CardFooter className='flex flex-row items-center justify-evenly p-4'>
                        <Button>
                            <Link href={project.github}>Github</Link>
                        </Button>
                        <Button>
                            <Link href={project.demo}>Demo</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
    </div>
  )
}

export default ProjectCards