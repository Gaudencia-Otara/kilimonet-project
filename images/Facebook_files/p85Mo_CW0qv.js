;/*FB_PKG_DELIM*/

__d("LSUpdateOrInsertThread",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[],e;return b.seq([function(d){return b.db.table(9).fetch([[[a[7]]]]).next().then(function(d,f){var g=d.done;d=d.value;return g?b.db.table(9).add({threadKey:a[7],lastReadWatermarkTimestampMs:a[1],authorityLevel:a[6],mailboxType:a[8],threadType:a[9],folderName:a[10],ongoingCallState:a[29],parentThreadKey:a[35],lastActivityTimestampMs:a[0],snippet:a[2],threadName:a[3],threadPictureUrl:a[4],needsAdminApprovalForNewParticipant:a[5],threadPictureUrlFallback:a[11],threadPictureUrlExpirationTimestampMs:a[12],removeWatermarkTimestampMs:a[13],muteExpireTimeMs:a[14],muteCallsExpireTimeMs:a[16],isAdminSnippet:a[20],snippetSenderContactId:a[21],snippetStringHash:a[24],snippetStringArgument1:a[25],snippetAttribution:a[26],snippetAttributionStringHash:a[27],cannotReplyReason:a[30],customEmoji:a[31],customEmojiImageUrl:a[32],outgoingBubbleColor:a[33],themeFbid:a[34],nullstateDescriptionText1:a[36],nullstateDescriptionType1:a[37],nullstateDescriptionText2:a[38],nullstateDescriptionType2:a[39],nullstateDescriptionText3:a[40],nullstateDescriptionType3:a[41],draftMessage:a[42],snippetHasEmoji:a[43],hasPersistentMenu:a[44],disableComposerInput:a[45],cannotUnsendReason:a[46],viewedPluginKey:a[47],viewedPluginContext:a[48],clientThreadKey:a[49],capabilities:a[50],shouldRoundThreadPicture:a[51],proactiveWarningDismissTime:a[52],isCustomThreadPicture:a[53],otidOfFirstMessage:a[54],normalizedSearchTerms:a[55],additionalThreadContext:a[56],disappearingThreadKey:a[57],isDisappearingMode:a[58],disappearingModeInitiator:a[59],unreadDisappearingMessageCount:a[60],lastMessageCtaId:a[62],lastMessageCtaType:a[63],lastMessageCtaTimestampMs:a[64],threadDescription:a[67],unsendLimitMs:a[68],capabilities2:a[76],capabilities3:a[77],syncGroup:a[80],threadInvitesEnabled:a[81],threadInviteLink:a[82],isAllUnreadMessageMissedCallXma:a[83],lastNonMissedCallXmaMessageTimestampMs:a[84],threadInvitesEnabledV2:a[86],hasPendingInvitation:a[89],eventStartTimestampMs:a[90],eventEndTimestampMs:a[91],takedownState:a[92],igFolder:a[93],inviterId:a[94],threadTags:a[95]}):(f=d.item,c[1]=f.lastActivityTimestampMs,c[3]=f.parentThreadKey,c[2]=f.disappearingThreadKey,c[4]=f.isDisappearingMode,b.i64.le(f.authorityLevel,a[6])?b.i64.gt(c[1],a[0])&&b.i64.neq(c[2],e)?(b.i64.eq(a[35],[-1,4294967286])&&b.i64.eq(c[3],[0,0])?(g=[c[3],f.folderName],c[5]=g[0],c[6]=g[1],g):(d=[a[35],a[10]],c[5]=d[0],c[6]=d[1],d),b.fe(b.db.table(9).fetch([[[a[7]]]]),function(b){var d=b.update;b.item;return d({lastReadWatermarkTimestampMs:f.lastReadWatermarkTimestampMs,authorityLevel:a[6],threadType:a[9],folderName:c[6],ongoingCallState:a[29],parentThreadKey:c[5],lastActivityTimestampMs:c[1],snippet:a[2],threadName:a[3],threadPictureUrl:a[4],needsAdminApprovalForNewParticipant:a[5],threadPictureUrlFallback:a[11],threadPictureUrlExpirationTimestampMs:a[12],removeWatermarkTimestampMs:a[13],muteExpireTimeMs:a[14],muteCallsExpireTimeMs:a[16],isAdminSnippet:a[20],snippetSenderContactId:a[21],snippetStringHash:a[24],snippetStringArgument1:a[25],snippetAttribution:a[26],snippetAttributionStringHash:a[27],cannotReplyReason:a[30],customEmoji:a[31],customEmojiImageUrl:a[32],outgoingBubbleColor:a[33],themeFbid:a[34],nullstateDescriptionText1:a[36],nullstateDescriptionType1:a[37],nullstateDescriptionText2:a[38],nullstateDescriptionType2:a[39],nullstateDescriptionText3:a[40],nullstateDescriptionType3:a[41],draftMessage:a[42],snippetHasEmoji:a[43],hasPersistentMenu:a[44],disableComposerInput:a[45],cannotUnsendReason:a[46],viewedPluginKey:a[47],viewedPluginContext:a[48],clientThreadKey:a[49],capabilities:a[50],shouldRoundThreadPicture:a[51],proactiveWarningDismissTime:a[52],isCustomThreadPicture:a[53],otidOfFirstMessage:a[54],normalizedSearchTerms:a[55],additionalThreadContext:a[56],disappearingThreadKey:c[2],isDisappearingMode:c[4],disappearingModeInitiator:a[59],unreadDisappearingMessageCount:a[60],lastMessageCtaId:a[62],lastMessageCtaType:a[63],lastMessageCtaTimestampMs:a[64],threadDescription:a[67],unsendLimitMs:a[68],capabilities2:a[76],capabilities3:a[77],syncGroup:a[80],threadInvitesEnabled:a[81],threadInviteLink:a[82],isAllUnreadMessageMissedCallXma:a[83],lastNonMissedCallXmaMessageTimestampMs:a[84],threadInvitesEnabledV2:a[86],hasPendingInvitation:a[89],eventStartTimestampMs:a[90],eventEndTimestampMs:a[91],takedownState:a[92],igFolder:a[93],inviterId:a[94],threadTags:a[95],avatarStickerInstructionKeyId:e,avatarStickerId:e,avatarStickerThumbnailImageUrl:e,avatarStickerThumbnailImageMimeType:e,avatarStickerOriginalImageUrl:e,avatarStickerOriginalImageMimeType:e,memberCount:e})})):b.fe(b.db.table(9).fetch([[[a[7]]]]),function(b){var d=b.update;b.item;return d({lastReadWatermarkTimestampMs:a[1],authorityLevel:a[6],threadType:a[9],folderName:a[10],ongoingCallState:a[29],parentThreadKey:a[35],lastActivityTimestampMs:a[0],snippet:a[2],threadName:a[3],threadPictureUrl:a[4],needsAdminApprovalForNewParticipant:a[5],threadPictureUrlFallback:a[11],threadPictureUrlExpirationTimestampMs:a[12],removeWatermarkTimestampMs:a[13],muteExpireTimeMs:a[14],muteCallsExpireTimeMs:a[16],isAdminSnippet:a[20],snippetSenderContactId:a[21],snippetStringHash:a[24],snippetStringArgument1:a[25],snippetAttribution:a[26],snippetAttributionStringHash:a[27],cannotReplyReason:a[30],customEmoji:a[31],customEmojiImageUrl:a[32],outgoingBubbleColor:a[33],themeFbid:a[34],nullstateDescriptionText1:a[36],nullstateDescriptionType1:a[37],nullstateDescriptionText2:a[38],nullstateDescriptionType2:a[39],nullstateDescriptionText3:a[40],nullstateDescriptionType3:a[41],draftMessage:a[42],snippetHasEmoji:a[43],hasPersistentMenu:a[44],disableComposerInput:a[45],cannotUnsendReason:a[46],viewedPluginKey:a[47],viewedPluginContext:a[48],clientThreadKey:a[49],capabilities:a[50],shouldRoundThreadPicture:a[51],proactiveWarningDismissTime:a[52],isCustomThreadPicture:a[53],otidOfFirstMessage:a[54],normalizedSearchTerms:a[55],additionalThreadContext:a[56],disappearingThreadKey:c[2],isDisappearingMode:c[4],disappearingModeInitiator:a[59],unreadDisappearingMessageCount:a[60],lastMessageCtaId:a[62],lastMessageCtaType:a[63],lastMessageCtaTimestampMs:a[64],threadDescription:a[67],unsendLimitMs:a[68],capabilities2:a[76],capabilities3:a[77],syncGroup:a[80],threadInvitesEnabled:a[81],threadInviteLink:a[82],isAllUnreadMessageMissedCallXma:a[83],lastNonMissedCallXmaMessageTimestampMs:a[84],threadInvitesEnabledV2:a[86],hasPendingInvitation:a[89],eventStartTimestampMs:a[90],eventEndTimestampMs:a[91],takedownState:a[92],igFolder:a[93],inviterId:a[94],threadTags:a[95],avatarStickerInstructionKeyId:e,avatarStickerId:e,avatarStickerThumbnailImageUrl:e,avatarStickerThumbnailImageMimeType:e,avatarStickerOriginalImageUrl:e,avatarStickerOriginalImageMimeType:e,memberCount:e})}):b.resolve())})},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSPopulateCommunityFolderData",["LSUpdateOrInsertThread"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e;return c.seq([function(d){return c.seq([function(b){return c.ftr(c.db.table(162).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.folderId,a[0])&&c.i64.gt([0,80],[0,80])}).next().then(function(b){var d=b.done;b.value;return d?c.db.table(162).put({folderId:a[0],fbGroupId:a[1],name:a[2],memberCount:a[4],description:a[3],pictureUrl:a[5],pictureUrlFallback:a[6],pictureUrlExpirationTimestampMs:a[7],capabilities:a[11],notificationSetting:a[12],notificationMutedUntil:a[13],sendsBlockedUntil:a[14],isHidden:a[15],hasSeenDisablingAlert:a[16],inviteLink:a[17],directInviteLink:a[18],enableState:a[19],fbGroupType:a[20],threadCount:a[22],disableTimestamp:a[21],inviteStatus:a[24],categoryCount:a[23],snippetText:a[25],coverPicUrl:a[26],coverPicUrlFallback:a[27],coverPicUrlExpirationTimestampMs:a[28],invitedThreadId:a[29]}):0})},function(d){return c.sp(b("LSUpdateOrInsertThread"),a[8],a[9],a[10],a[2],a[5],e,[0,80],a[0],[0,0],[0,17],"community",a[6],a[7],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],e,!1,e,e,e,e,e,e,e,[0,0],[0,0],e,e,e,e,e,[-1,4294967282],e,e,e,e,e,e,e,!1,!1,!1,e,e,e,e,[0,0],e,e,!1,e,e,e,e,!1,e,[0,0],e,[0,0],e,e,e,e,e,[0,0],e,e,e,e,e,e,e,[0,0],[0,0],e,e,e,[0,0],e,!1,e,!1,[0,0],e,e,e,e,e,e,e,e,e)}])},function(a){return c.resolve(d)}])}e.exports=a}),null);
__d("LSDeleteThenInsertCmCommunityList",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(166).put({communityId:a[0]})},function(a){return b.resolve(c)}])}e.exports=a}),null);