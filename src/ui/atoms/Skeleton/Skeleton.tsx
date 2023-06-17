"use client";

import { Skeleton as MuiSkeleton, SkeletonProps as MuiSkeletonProps } from "@mui/material";
import { FC } from "react";

export type SkeletonProps = MuiSkeletonProps;

const Skeleton: FC<SkeletonProps> = ({ ...rest }) => <MuiSkeleton {...rest} />;

export default Skeleton;
