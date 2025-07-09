"use client"

import { Star, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

// Profile Avatar Component
const ProfileAvatar = ({
  reviewer,
}: {
  reviewer: {
    profilePhotoUrl?: string
    displayName: string
    isAnonymous?: boolean
  }
}) => {
  if (reviewer.profilePhotoUrl && !reviewer.isAnonymous) {
    return (
      <Avatar>
        <AvatarFallback>
          {reviewer.displayName
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </AvatarFallback>
        <AvatarImage
          src={reviewer.profilePhotoUrl}
          alt={reviewer.displayName}
        ></AvatarImage>
      </Avatar>
    )
  }

  if (reviewer.isAnonymous) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white">
        <User className="w-5 h-5" />
      </div>
    )
  }

  const initials = reviewer.displayName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
      {initials}
    </div>
  )
}

// Format date helper
const formatDate = (dateString: string) => {
  if (!dateString) return ""

  try {
    const date = new Date(dateString).valueOf()
    const now = new Date().valueOf()
    const diffInMs = now - date
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (diffInDays === 0) return "Today"
    if (diffInDays === 1) return "Yesterday"
    if (diffInDays < 7) return `${diffInDays} days ago`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`
    return `${Math.floor(diffInDays / 365)} years ago`
  } catch {
    return ""
  }
}

// Individual Review Card Component
export const ReviewCard = ({
  review,
}: {
  review: {
    reviewId: string | null
    reviewer: {
      profilePhotoUrl?: string
      displayName: string
      isAnonymous?: boolean
    }
    comment?: string
    starRating: number
    createTime: string | null
  }
}) => {
  const { reviewId, reviewer, comment, starRating, createTime } = review

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Profile and Rating */}
      <div className="flex items-center gap-3 mb-4">
        <ProfileAvatar reviewer={reviewer} />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm capitalize">
            {reviewer.isAnonymous ? "Anonymous" : reviewer.displayName}
          </h3>
          <div className="flex items-center gap-2">
            <StarRating rating={starRating} />
            {createTime && (
              <span className="text-xs text-gray-500">
                {formatDate(createTime)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Review Text */}
      {comment && (
        <p className="text-gray-700 leading-relaxed text-sm mb-4">{comment}</p>
      )}
    </div>
  )
}
