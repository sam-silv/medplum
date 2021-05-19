import { Resource, schema } from 'medplum';
import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { FormSection } from './FormSection';
import { parseResourceForm } from './FormUtils';
import { useMedplum } from './MedplumProvider';
import { ResourcePropertyInput } from './ResourcePropertyInput';

export interface ResourceFormProps {
  resource?: Resource;
  resourceType?: string;
  id?: string;
  onSubmit: (formData: any) => void;
}

export function ResourceForm(props: any) {
  const medplum = useMedplum();
  const [value, setValue] = useState<Resource | undefined>(props.resource);

  useEffect(() => {
    if (!props.resource && props.resourceType && props.id) {
      medplum.read(props.resourceType, props.id)
        .then(result => setValue(result));
    }
  }, [props.resourceType, props.id]);

  if (!value) {
    return <div>Loading...</div>
  }

  const typeSchema = schema[value.resourceType];

  return (
    <form noValidate autoComplete="off" onSubmit={(e: React.FormEvent) => {
      e.preventDefault();
      const formData = parseResourceForm(value.resourceType, e.target as HTMLFormElement, value);
      if (props.onSubmit) {
        props.onSubmit(formData);
      }
    }}>
      <FormSection title="Resource Type">
        <input name="resourceType" type="text" defaultValue={value.resourceType} disabled={true} />
      </FormSection>
      <FormSection title="ID">
        <input name="id" type="text" defaultValue={value.id} disabled={true} />
      </FormSection>
      {Object.entries(typeSchema.properties).map(entry => {
        const key = entry[0];
        const property = entry[1];
        return (
          <FormSection key={key} title={property.display} description={property.description}>
            <ResourcePropertyInput property={property} name={property.key} value={(value as any)[key]} />
          </FormSection>
        );
      })}
      <Button type="submit" size="large">OK</Button>
    </form>
  );
}
