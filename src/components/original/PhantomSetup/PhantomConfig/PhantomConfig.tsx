import React from 'react'
import { Link } from "react-router-dom"
import { Routes, Route, Navigate } from "react-router-dom"
import {StepType} from "../../../../pages/data"


import { makeUrlPath } from "../../../../utils"



import { HiCheck, HiOutlineX } from "react-icons/hi"



interface PhantomConfigProps {
  children?: React.ReactNode
  steps: StepType[]
}

export const PhantomConfig = ({ steps }: PhantomConfigProps) => {
  return (
    <div className='setup-wrapper'>
      <aside>
        steps:
        <br />
        {steps.map((step, i) => {
          return (
            <>
              <Link key={i} to={"step/" + makeUrlPath(step.title)}>
                {step.title}
              </Link>
              {i < steps.length - 1 && <hr />}
            </>
          )
        })}
      </aside>

      <main className='component'>
        <Routes>
          <Route path='step/'>
            <Route
              index
              element={<Navigate to={makeUrlPath(steps[0].title)} replace />}
            />
            <Route
              path='*'
              element={<Navigate to={makeUrlPath(steps[0].title)} replace />}
            />
            {steps.map((step, i) => {
              return (
                <Route
                  key={i}
                  path={makeUrlPath(step.title)}
                  element={step.content}
                />
              )
            })}
          </Route>
        </Routes>
      </main>
    </div>
  )
}
