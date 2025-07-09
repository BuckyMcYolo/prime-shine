"use client"

import React, { useEffect, useState } from "react"

export const MasonryContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth
      if (width < 768) setColumns(1)
      else if (width < 1024) setColumns(2)
      else if (width < 1280) setColumns(3)
      else setColumns(4)
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  const distributeItems = () => {
    const columnArrays: React.ReactNode[][] = Array.from(
      { length: columns },
      () => []
    )
    React.Children.toArray(children).forEach((child, index) => {
      columnArrays[index % columns].push(child)
    })
    return columnArrays
  }

  const columnArrays = distributeItems()

  return (
    <div className="flex gap-6">
      {columnArrays.map((column, columnIndex) => (
        <div key={columnIndex} className="flex-1 flex flex-col gap-6">
          {column}
        </div>
      ))}
    </div>
  )
}
