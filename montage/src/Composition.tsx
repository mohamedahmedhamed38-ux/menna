import { Video } from "@remotion/media";
import { AbsoluteFill, Composition, Series, staticFile, useVideoConfig } from "remotion";

// Source: public/source.mp4 (600x338, 30fps, 36.87s).
// Clips are cut at the pauses in the voiceover so each one holds a full phrase.
// Reorder, trim, duplicate or delete the Series.Sequence nodes to re-edit the montage.

export const MyComposition = () => {
  return (
    <Composition
      id="Montage"
      component={Montage}
      durationInFrames={1106}
      fps={30}
      width={1280}
      height={720}
    />
  );
};

const src = staticFile("source.mp4");

export const Montage: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Series>
        <Series.Sequence name="01 Intro - phone" durationInFrames={64} premountFor={fps}>
          <Video src={src} trimBefore={0} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="02 مبروك عليك" durationInFrames={33} premountFor={fps}>
          <Video src={src} trimBefore={64} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="03 بتسوق" durationInFrames={46} premountFor={fps}>
          <Video src={src} trimBefore={97} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="04 أو دا" durationInFrames={21} premountFor={fps}>
          <Video src={src} trimBefore={143} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="05 بعض شركات التسويق" durationInFrames={84} premountFor={fps}>
          <Video src={src} trimBefore={164} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="06 بس استنى ثانية" durationInFrames={40} premountFor={fps}>
          <Video src={src} trimBefore={248} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="07 تملى صفحتك" durationInFrames={81} premountFor={fps}>
          <Video src={src} trimBefore={288} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="08 البيزنس بتاعك يكبر" durationInFrames={87} premountFor={fps}>
          <Video src={src} trimBefore={369} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="09 سهل جدا" durationInFrames={86} premountFor={fps}>
          <Video src={src} trimBefore={456} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="10 بس مش سهل" durationInFrames={97} premountFor={fps}>
          <Video src={src} trimBefore={542} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="11 مش التسويق" durationInFrames={81} premountFor={fps}>
          <Video src={src} trimBefore={639} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="12 بتكلم مين" durationInFrames={72} premountFor={fps}>
          <Video src={src} trimBefore={720} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="13 إنت بالذات" durationInFrames={69} premountFor={fps}>
          <Video src={src} trimBefore={792} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="14 عشان مش المهم تنشر" durationInFrames={58} premountFor={fps}>
          <Video src={src} trimBefore={861} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="15 بتنشر ليه" durationInFrames={68} premountFor={fps}>
          <Video src={src} trimBefore={919} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
        <Series.Sequence name="16 Logo outro" durationInFrames={119} premountFor={fps}>
          <Video src={src} trimBefore={987} objectFit="cover" premountFor={fps} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
